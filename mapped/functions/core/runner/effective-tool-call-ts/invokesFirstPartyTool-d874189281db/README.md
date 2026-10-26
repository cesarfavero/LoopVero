# `invokesFirstPartyTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/effective-tool-call.ts` · [README do módulo](../../../../../modules/core/runner/effective-tool-call-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:479737-479740](../../../../../../reference/runtime/sand-eval-runner.cjs#L479737-L479740) | `FunctionDeclaration` | não | `part, matches` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:479737-479740](../../../../../../reference/runtime/sand-eval-runner.cjs#L479737-L479740) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:479737

Chamadas escritas diretamente neste corpo: `matches`, `resolveEffectiveToolCall`.

SHA-256 do trecho: `3661cf090907f575e1a590b65ad721ce85eabaa37f9b23755a547c347eafadd0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
