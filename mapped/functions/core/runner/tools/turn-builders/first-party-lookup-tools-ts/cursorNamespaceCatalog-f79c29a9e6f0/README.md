# `cursorNamespaceCatalog`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/first-party-lookup-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/first-party-lookup-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:578893-578905](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578893-L578905) | `FunctionDeclaration` | não | `registry3, decisions` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:578893-578905](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578893-L578905) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:578893

Chamadas escritas diretamente neste corpo: `.join`, `names3.flatMap`, `names3.join`, `registry3.getToolNames`.

SHA-256 do trecho: `7a1c09e2dad6b603a01a5eb2379b5b3dbe89fb25a2a2e7b418d4a378fe01dc7c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
