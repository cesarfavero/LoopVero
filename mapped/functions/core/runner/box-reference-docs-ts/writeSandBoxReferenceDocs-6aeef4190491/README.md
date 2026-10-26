# `writeSandBoxReferenceDocs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/box-reference-docs.ts` · [README do módulo](../../../../../modules/core/runner/box-reference-docs-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:558511-558529](../../../../../../reference/runtime/host-main.cjs#L558511-L558529) | `FunctionDeclaration` | sim | `referenceDir = SAND_BOX_REFERENCE_DIR, facts = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:558511-558529](../../../../../../reference/runtime/host-main.cjs#L558511-L558529) | 1 | 1 | 2 | 1 | 0 | 0 |

### host:558511

Chamadas escritas diretamente neste corpo: `encoder2.encode`, `gatedSandAppActionsReferenceDoc`, `gatedSandAppUiReferenceDoc`, `new TextEncoder`, `writeFileAtomic`, `written.push`.

SHA-256 do trecho: `20ebc9a057cc835223337e5672c7d055c4d2d39992e37500e23b9cbbdf6fb234`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
