# `readBoundBoxImages`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagents/image-attachments.ts` · [README do módulo](../../../../../../modules/core/runner/subagents/image-attachments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:533468-533502](../../../../../../../reference/runtime/sand-eval-runner.cjs#L533468-L533502) | `FunctionDeclaration` | sim | `{   ctx,   box,   boxId,   images,   source,   failure: failure3,   rejectUndecodable,   readStore: readStore2 }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533468-533502](../../../../../../../reference/runtime/sand-eval-runner.cjs#L533468-L533502) | 0 | 0 | 1 | 1 | 0 | 0 |

### evaluation:533468

Chamadas escritas diretamente neste corpo: `forEachBounded`, `images.entries`, `images.flatMap`, `new Map`.

SHA-256 do trecho: `08abc33e7ae242604c3fdc3c383917356ae8ba37062eaaea6958ed0f3132be5a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
