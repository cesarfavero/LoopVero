# `readHostSandUiFacts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `host/extensions/forever-box/prompt-artifacts.ts` · [README do módulo](../../../../../../modules/host/extensions/forever-box/prompt-artifacts-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:680754-680784](../../../../../../../reference/runtime/host-main.cjs#L680754-L680784) | `FunctionDeclaration` | não | `source` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680754-680784](../../../../../../../reference/runtime/host-main.cjs#L680754-L680784) | 5 | 1 | 0 | 2 | 0 | 0 |

### host:680754

Chamadas escritas diretamente neste corpo: `accountCanRunTeamBots`, `isFlagName`, `source.getAdminPolicy`, `source.getPhoneGates`, `source.hasAuthenticatedBootstrap`, `source.peekFeatureGate`.

Alvos de atribuição ou incremento: `gates[computed]`, `phoneGates`, `sandUiAct`, `sandUiMap`, `sandUiOpen`.

SHA-256 do trecho: `97f134194ac5e84993f2c5631eb4fb1702be451ee0e825d595cd789377b24ce6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
