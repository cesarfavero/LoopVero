# `selectHiddenArtifactEntryIds`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/conversation-recovery.ts` · [README do módulo](../../../../../../modules/host/extensions/session/conversation-recovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:719939-719951](../../../../../../../reference/runtime/host-main.cjs#L719939-L719951) | `FunctionDeclaration` | não | `entries, outline` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719939-719951](../../../../../../../reference/runtime/host-main.cjs#L719939-L719951) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:719939

Chamadas escritas diretamente neste corpo: `entry.id.slice`, `ids.push`, `isRebuiltEntry`, `new Map`, `outline.map`, `outlineById.get`.

SHA-256 do trecho: `e2a7c2db803674cc2e6e22fdb4d2c4b7baa7e3f1229736c3e85595a994ff76c9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
