# `groupHistoryFromTranscriptEntries`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/group-messaging/README.md).

**Módulo:** `core/groups/group-history.ts` · [README do módulo](../../../../../modules/core/groups/group-history-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:737645-737679](../../../../../../reference/runtime/host-main.cjs#L737645-L737679) | `FunctionDeclaration` | não | `entries, seqOf` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737645-737679](../../../../../../reference/runtime/host-main.cjs#L737645-L737679) | 6 | 1 | 0 | 1 | 0 | 0 |

### host:737645

Chamadas escritas diretamente neste corpo: `Number`, `entries.map`, `entry.content.trim`, `groupPostText`, `groupReplyTarget`, `messages2.push`, `new Map`, `seqOf`.

SHA-256 do trecho: `ea380a3689042f9b3d53f1e4abccacf235dd086f2ebb6c2203f7c4325617630c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
