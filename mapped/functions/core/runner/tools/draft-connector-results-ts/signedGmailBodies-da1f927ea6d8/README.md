# `signedGmailBodies`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-connector-results.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732858-732868](../../../../../../../reference/runtime/host-main.cjs#L732858-L732868) | `FunctionDeclaration` | não | `route, draft, options2` |
| [evaluation:540380-540390](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540380-L540390) | `FunctionDeclaration` | não | `route, draft, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732858-732868](../../../../../../../reference/runtime/host-main.cjs#L732858-L732868) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:540380-540390](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540380-L540390) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:732858

Chamadas escritas diretamente neste corpo: `cardHtmlBody`, `signatureText`.

SHA-256 do trecho: `fa5954f4c7a243dd3f457211f32095fb1352921e342731177eddfd413fd5cc15`.

### evaluation:540380

Chamadas escritas diretamente neste corpo: `cardHtmlBody`, `signatureText`.

SHA-256 do trecho: `fa5954f4c7a243dd3f457211f32095fb1352921e342731177eddfd413fd5cc15`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
