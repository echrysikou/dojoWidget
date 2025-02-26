import { ICollaborator } from '@src/interfaces/interfaces';
import { state } from '@src/store/store';
import { TRANSACTION_FEES_PERCENTAGE } from '@src/utils/constants';
import { capitalizeFirstCharOfEachWord, getAvatarInitials } from '@src/utils/utils';
import { Component, h } from '@stencil/core';
import i18n from '@src/utils/i18n';

@Component({
  tag: 'collaborators-list',
  styleUrl: 'collaborators-list.css',
  shadow: false,
})
export class CollaboratorsList {
  render() {
    const { font, collaborators } = state.widgetDetails;

    return (
      <div class="collaborators-container">
        <app-typography variant="secondaryP" fontFamily={font} styleProps={{ fontWeight: '700' }}>
          Collaborators
        </app-typography>

        <div class="collaborators" style={{ justifyContent: collaborators.length === 1 ? 'center' : collaborators.length === 2 ? 'space-around' : 'space-between' }}>
          {collaborators.map((collaborator: ICollaborator) => {
            const { name, surname, headline } = collaborator.profile;
            const initials = getAvatarInitials(name, surname);
            return (
              <div key={collaborator.id} class="collaborator-stack">
                <app-typography
                  variant="secondaryP"
                  fontFamily={font}
                  styleProps={{
                    textAlign: 'center',
                    marginLeft: '8px',
                  }}
                >
                  {collaborator?.share ? collaborator.share * 100 : 0} %
                </app-typography>

                <div class="avatar-container">
                  {collaborator?.profile?.image ? (
                    <img class="avatar-image" src={collaborator.profile.image} alt={name + ' ' + surname} />
                  ) : (
                    <div class="avatar-initials">
                      <app-typography variant="body1" fontFamily={'var(--font-primary)'} styleProps={{ fontSize: '35px', marginBottom: '-5px' }}>
                        {initials}
                      </app-typography>
                    </div>
                  )}
                </div>

                <app-typography
                  variant="secondaryCaption"
                  fontFamily={font}
                  styleProps={{
                    fontWeight: 500,
                    textAlign: 'center',
                    marginTop: '8px',
                  }}
                >
                  {capitalizeFirstCharOfEachWord(name ?? '')} {capitalizeFirstCharOfEachWord(surname ?? '')}
                </app-typography>

                <app-typography
                  variant="secondaryMessage"
                  fontFamily={font}
                  style={{
                    textAlign: 'center',
                    marginTop: '-10px',
                    // color: professionColor, TODO: define color
                  }}
                >
                  {capitalizeFirstCharOfEachWord(headline ?? '')}
                </app-typography>
              </div>
            );
          })}
        </div>

        <div class="fee-container">
          <app-typography
            variant="secondaryMessage"
            fontFamily={font}
            styleProps={
              {
                // color: feesColor, TODO: define color
              }
            }
          >
            {i18n.t('transactionFeesPercentage', {
              percentage: TRANSACTION_FEES_PERCENTAGE,
            })}
          </app-typography>
        </div>
      </div>
    );
  }
}
