# `normalizeSendToAgentArgs/pick2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-agent-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-agent-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:757288-757294](../../../../../../../reference/runtime/host-main.cjs#L757288-L757294) | `ArrowFunctionExpression` | não | `canonical, aliases` |
| [evaluation:543311-543317](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543311-L543317) | `ArrowFunctionExpression` | não | `canonical, aliases` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757288-757294](../../../../../../../reference/runtime/host-main.cjs#L757288-L757294) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:543311-543317](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543311-L543317) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:757288

Chamadas escritas diretamente neste corpo: `aliases.find`, `aliasesUsed.push`.

SHA-256 do trecho: `0a8ef70223e2a3fe9549a765a66dfdc681c83007b98b9ae7198c3f510eeb9efc`.

### evaluation:543311

Chamadas escritas diretamente neste corpo: `aliases.find`, `aliasesUsed.push`.

SHA-256 do trecho: `0a8ef70223e2a3fe9549a765a66dfdc681c83007b98b9ae7198c3f510eeb9efc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
