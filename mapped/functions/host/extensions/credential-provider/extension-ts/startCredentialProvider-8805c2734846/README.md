# `startCredentialProvider`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:551488-551970](../../../../../../../reference/runtime/host-main.cjs#L551488-L551970) | `FunctionDeclaration` | sim | `context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:551488-551970](../../../../../../../reference/runtime/host-main.cjs#L551488-L551970) | 4 | 0 | 3 | 1 | 0 | 0 |

### host:551488

Chamadas escritas diretamente neste corpo: `.withName`, `applyMarker`, `context2.deps.experiments.checkGate`, `context2.onStop`, `createBrokerGrantWriter`, `createBrokerSessionReader`, `createContext`, `createCredentialAuditLogger`, `createCredentialAutoFillRequestResolver`, `createCredentialFillRemoteHolds`, `createCredentialOneTimeCodeResolver`, `createCredentialPasswordStepResolver`, `createCredentialProviderDirectoryReader`, `createLeasedCredentialFill`, `createPollingPolicy2`, `createSandCursorBackendClient`, `installAndArm`, `new AbortController`, `new BrowserCredentialFiller`, `new CredentialCoordinator`, `new CredentialFillLease`, `new CredentialOneTimeCodeFollowUp`, `new CredentialPasswordStepFollowUp`, `new OnePasswordBrokerBridge`, `new OnePasswordBrokerService`, `removeOnePasswordExtension`.

Alvos de atribuição ou incremento: `broker`.

SHA-256 do trecho: `1f55ef8dcf60582dac9582f86fd910ef8422499dfcd07ec977327bc92a939fe3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
