# `countAttachmentKinds`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/context-compaction/README.md).

**Módulo:** `shared/media/attachment-summary.ts` · [README do módulo](../../../../../modules/shared/media/attachment-summary-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:541926-541932](../../../../../../reference/runtime/host-main.cjs#L541926-L541932) | `FunctionDeclaration` | não | `kinds` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541926-541932](../../../../../../reference/runtime/host-main.cjs#L541926-L541932) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:541926

Chamadas escritas diretamente neste corpo: `.map`, `counts.get`, `counts.set`, `new Map`.

SHA-256 do trecho: `8fec9a23dc3f0716a3c61c9ed2ee1787519084aea35de392ff0c5f9d86bfb663`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
