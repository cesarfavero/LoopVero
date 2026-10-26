# `isTransientStreamError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/transient-stream-error.ts` · [README do módulo](../../../../../modules/core/runner/transient-stream-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:736214-736216](../../../../../../reference/runtime/host-main.cjs#L736214-L736216) | `FunctionDeclaration` | não | `error64` |
| [evaluation:589895-589897](../../../../../../reference/runtime/sand-eval-runner.cjs#L589895-L589897) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736214-736216](../../../../../../reference/runtime/host-main.cjs#L736214-L736216) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:589895-589897](../../../../../../reference/runtime/sand-eval-runner.cjs#L589895-L589897) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:736214

Chamadas escritas diretamente neste corpo: `classify`, `new Set`.

SHA-256 do trecho: `911e20b341c1ab32199f9d8319ad5b66c8bdec27237add6a80229c0ae82098f2`.

### evaluation:589895

Chamadas escritas diretamente neste corpo: `classify3`, `new Set`.

SHA-256 do trecho: `130dae0dba88a6bdeaf0145be8f37fe927ea2c2925306b258421a4c9599b8982`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
