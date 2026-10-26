# `shellAuditAction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-action-audit.ts` · [README do módulo](../../../../../modules/core/runner/sand-action-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:512915-512918](../../../../../../reference/runtime/sand-eval-runner.cjs#L512915-L512918) | `FunctionDeclaration` | não | `deps, shellKind, command, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512915-512918](../../../../../../reference/runtime/sand-eval-runner.cjs#L512915-L512918) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:512915

Chamadas escritas diretamente neste corpo: `deps.target`.

SHA-256 do trecho: `9ec1605d6fed98b09e2ad92520bcdee46c55aebdb71de0e637c36fb9d0f09340`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
