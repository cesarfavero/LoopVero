# `rejectBareRepoSlug`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-request-composition.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-request-composition-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:510241-510246](../../../../../../reference/runtime/host-main.cjs#L510241-L510246) | `FunctionDeclaration` | não | `requested` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:510241-510246](../../../../../../reference/runtime/host-main.cjs#L510241-L510246) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:510241

Chamadas escritas diretamente neste corpo: `isRepoShorthand`, `new SandCloudAgentLaunchError`.

Alvos de lançamento explícito: `SandCloudAgentLaunchError`.

SHA-256 do trecho: `4fd5aa1a4326277d051b7061f68e1b71db672175c111bd4ac6f7fec920e4ba50`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
