# `draftCallResultText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-connector-results.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732657-732661](../../../../../../../reference/runtime/host-main.cjs#L732657-L732661) | `FunctionDeclaration` | não | `result` |
| [evaluation:540179-540183](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540179-L540183) | `FunctionDeclaration` | não | `result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732657-732661](../../../../../../../reference/runtime/host-main.cjs#L732657-L732661) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:540179-540183](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540179-L540183) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:732657

Chamadas escritas diretamente neste corpo: `.join`, `.trim`, `inner.value.content.map`.

SHA-256 do trecho: `5722e96b9dbb31edc3cf0394af76b4e44ae502e440ff51754fb7085e16fe5b46`.

### evaluation:540179

Chamadas escritas diretamente neste corpo: `.join`, `.trim`, `inner.value.content.map`.

SHA-256 do trecho: `5722e96b9dbb31edc3cf0394af76b4e44ae502e440ff51754fb7085e16fe5b46`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
