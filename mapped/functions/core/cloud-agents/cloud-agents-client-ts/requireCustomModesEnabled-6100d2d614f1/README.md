# `requireCustomModesEnabled`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agents-client.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:512853-512859](../../../../../../reference/runtime/host-main.cjs#L512853-L512859) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512853-512859](../../../../../../reference/runtime/host-main.cjs#L512853-L512859) | 1 | 0 | 0 | 0 | 1 | 0 |

### host:512853

Chamadas escritas diretamente neste corpo: `deps.isCustomModeEnabled`, `new SandCloudAgentCustomModeError`.

Alvos de lançamento explícito: `SandCloudAgentCustomModeError`.

SHA-256 do trecho: `5da5be5cd458161f0983aa90e5692e1bbf3fb753931acdd0b9acb3d606ebb52e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
