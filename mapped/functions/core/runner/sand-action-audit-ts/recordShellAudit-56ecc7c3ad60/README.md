# `recordShellAudit`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-action-audit.ts` · [README do módulo](../../../../../modules/core/runner/sand-action-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:512854-512863](../../../../../../reference/runtime/sand-eval-runner.cjs#L512854-L512863) | `FunctionDeclaration` | não | `auditor, record4` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512854-512863](../../../../../../reference/runtime/sand-eval-runner.cjs#L512854-L512863) | 0 | 0 | 0 | 0 | 0 | 1 |

### evaluation:512854

Chamadas escritas diretamente neste corpo: `auditor.record`, `errorLogTag`, `process.stderr.write`.

SHA-256 do trecho: `20791db91fd990053159d6ca56af28f760f8e91e763e22178587867a64f23ca2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
