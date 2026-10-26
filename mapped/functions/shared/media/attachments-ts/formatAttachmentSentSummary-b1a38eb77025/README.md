# `formatAttachmentSentSummary`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/attachments.ts` · [README do módulo](../../../../../modules/shared/media/attachments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:490345-490355](../../../../../../reference/runtime/host-main.cjs#L490345-L490355) | `FunctionDeclaration` | não | `count2, kinds` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490345-490355](../../../../../../reference/runtime/host-main.cjs#L490345-L490355) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:490345

Chamadas escritas diretamente neste corpo: `.join`, `Math.floor`, `Math.max`, `kindPhrase`, `mergeAttachmentKindCounts`, `merged.map`.

SHA-256 do trecho: `4d894153cd95826be66c01214bd611128ca8b976548e7496bf87646735871d6b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
