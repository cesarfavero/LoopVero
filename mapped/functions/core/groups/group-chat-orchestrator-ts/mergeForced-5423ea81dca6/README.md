# `mergeForced`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/group-messaging/README.md).

**Módulo:** `core/groups/group-chat-orchestrator.ts` · [README do módulo](../../../../../modules/core/groups/group-chat-orchestrator-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:737599-737612](../../../../../../reference/runtime/host-main.cjs#L737599-L737612) | `FunctionDeclaration` | não | `into, from2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737599-737612](../../../../../../reference/runtime/host-main.cjs#L737599-L737612) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:737599

Chamadas escritas diretamente neste corpo: `merged.get`, `merged.set`, `new Map`.

SHA-256 do trecho: `07de8d9f4d324be445bcb39714720392ee38113fafcf0ce889ed7a69b782b798`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
