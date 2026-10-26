# `sanitizeHeaderValue`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/observability/request-lineage.ts` · [README do módulo](../../../../../modules/shared/observability/request-lineage-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:216804-216806](../../../../../../reference/runtime/host-main.cjs#L216804-L216806) | `FunctionDeclaration` | não | `value` |
| [evaluation:511655-511657](../../../../../../reference/runtime/sand-eval-runner.cjs#L511655-L511657) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:216804-216806](../../../../../../reference/runtime/host-main.cjs#L216804-L216806) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:511655-511657](../../../../../../reference/runtime/sand-eval-runner.cjs#L511655-L511657) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:216804

Chamadas escritas diretamente neste corpo: `value.replace`.

SHA-256 do trecho: `931eb6bf59728b400b7934d015a3a0313ac42e260f5b439d5f20b301fb3e144b`.

### evaluation:511655

Chamadas escritas diretamente neste corpo: `value.replace`.

SHA-256 do trecho: `931eb6bf59728b400b7934d015a3a0313ac42e260f5b439d5f20b301fb3e144b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
