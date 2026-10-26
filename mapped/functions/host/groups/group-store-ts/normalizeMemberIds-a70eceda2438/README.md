# `normalizeMemberIds`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/group-messaging/README.md).

**Módulo:** `host/groups/group-store.ts` · [README do módulo](../../../../../modules/host/groups/group-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491441-491452](../../../../../../reference/runtime/host-main.cjs#L491441-L491452) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491441-491452](../../../../../../reference/runtime/host-main.cjs#L491441-L491452) | 4 | 1 | 0 | 2 | 0 | 0 |

### host:491441

Chamadas escritas diretamente neste corpo: `Array.isArray`, `new Set`, `parseAgentId`, `seen.add`, `seen.has`, `value.trim`.

SHA-256 do trecho: `21859c899df77be48128fff1b77d8b85cedac58703274be60253cf614b4b7cbc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
