# `resolveSandAgentTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tool-policy/agent-manifests.ts` · [README do módulo](../../../../../../modules/core/runner/tool-policy/agent-manifests-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:543240-543243](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543240-L543243) | `FunctionDeclaration` | não | `kind, variant` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:543240-543243](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543240-L543243) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:543240

Chamadas escritas diretamente neste corpo: `applyToolKeepList`, `manifestOf`.

SHA-256 do trecho: `bca34a8ceef6747b7264d075fa51cf706499c182d6895e6eb4648add67b04b92`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
