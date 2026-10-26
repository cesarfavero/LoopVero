# `displayOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-messages-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777978-777982](../../../../../../../reference/runtime/host-main.cjs#L777978-L777982) | `FunctionDeclaration` | não | `args` |
| [evaluation:577713-577717](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577713-L577717) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777978-777982](../../../../../../../reference/runtime/host-main.cjs#L777978-L777982) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:577713-577717](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577713-L577717) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:777978

Chamadas escritas diretamente neste corpo: `.replace`, `.slice`, `.trim`, `args.recipientName.replace`.

SHA-256 do trecho: `d414ba80e44dff15d01d6690642526467681374d0f58e178c7c512bdfd6df634`.

### evaluation:577713

Chamadas escritas diretamente neste corpo: `.replace`, `.slice`, `.trim`, `args.recipientName.replace`.

SHA-256 do trecho: `d414ba80e44dff15d01d6690642526467681374d0f58e178c7c512bdfd6df634`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
