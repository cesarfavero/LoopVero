# `classifyToolError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/communicate-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:725028-725034](../../../../../../../reference/runtime/host-main.cjs#L725028-L725034) | `FunctionDeclaration` | não | `error64` |
| [evaluation:479999-480005](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479999-L480005) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725028-725034](../../../../../../../reference/runtime/host-main.cjs#L725028-L725034) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:479999-480005](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479999-L480005) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:725028

Chamadas escritas diretamente neste corpo: `isInfrastructureError`.

SHA-256 do trecho: `5386352e10cd9829b461ffddc5c8620e20e4d15610c0a357eef306c132f0d238`.

### evaluation:479999

Chamadas escritas diretamente neste corpo: `isInfrastructureError`.

SHA-256 do trecho: `a88e646d6abee904dec8bb5b7c3c239e892f02919dfebb947f240b0cd62574ce`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
