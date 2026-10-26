# `cspSourceList`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/mcp-app.ts` · [README do módulo](../../../../../modules/shared/mcp/mcp-app-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:486812-486816](../../../../../../reference/runtime/host-main.cjs#L486812-L486816) | `FunctionDeclaration` | não | `value` |
| [evaluation:495128-495132](../../../../../../reference/runtime/sand-eval-runner.cjs#L495128-L495132) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486812-486816](../../../../../../reference/runtime/host-main.cjs#L486812-L486816) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:495128-495132](../../../../../../reference/runtime/sand-eval-runner.cjs#L495128-L495132) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:486812

Chamadas escritas diretamente neste corpo: `Array.isArray`, `value.filter`.

SHA-256 do trecho: `353f8568034880aa23f509dff23f36a08868b57f23c5a33d269a3c514ec88103`.

### evaluation:495128

Chamadas escritas diretamente neste corpo: `Array.isArray`, `value.filter`.

SHA-256 do trecho: `353f8568034880aa23f509dff23f36a08868b57f23c5a33d269a3c514ec88103`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
