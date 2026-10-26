# `parseShellTerminalStartedAtMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/background-work.ts` · [README do módulo](../../../../../modules/core/runner/background-work-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:490482-490487](../../../../../../reference/runtime/sand-eval-runner.cjs#L490482-L490487) | `FunctionDeclaration` | não | `content` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490482-490487](../../../../../../reference/runtime/sand-eval-runner.cjs#L490482-L490487) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:490482

Chamadas escritas diretamente neste corpo: `Date.parse`, `Number.isFinite`, `[computed].trim`, `content.match`, `header.match`.

SHA-256 do trecho: `046c8e0aac8565b38286df7c7e44e2c4270724e9d8d27093c27908d129936dd9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
