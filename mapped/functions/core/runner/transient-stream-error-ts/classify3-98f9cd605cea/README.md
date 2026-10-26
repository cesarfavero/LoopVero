# `classify3`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/transient-stream-error.ts` · [README do módulo](../../../../../modules/core/runner/transient-stream-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:589898-589913](../../../../../../reference/runtime/sand-eval-runner.cjs#L589898-L589913) | `FunctionDeclaration` | não | `error63, seen` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:589898-589913](../../../../../../reference/runtime/sand-eval-runner.cjs#L589898-L589913) | 7 | 0 | 0 | 8 | 0 | 0 |

### evaluation:589898

Chamadas escritas diretamente neste corpo: `Array.isArray`, `TRANSIENT_ERRNO_CODES.has`, `classify3`, `fields3.code.toUpperCase`, `fields3.errors.some`, `messageLooksTransient`, `seen.add`, `seen.has`.

SHA-256 do trecho: `e62b1a6d1f59175c8be4f492faa0ab85b259420280b592ec490280f721721977`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
