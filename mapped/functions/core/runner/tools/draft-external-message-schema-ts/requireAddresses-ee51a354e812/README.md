# `requireAddresses`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-external-message-schema.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-external-message-schema-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755065-755073](../../../../../../../reference/runtime/host-main.cjs#L755065-L755073) | `FunctionDeclaration` | não | `ctx, field, values` |
| [evaluation:539690-539698](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539690-L539698) | `FunctionDeclaration` | não | `ctx, field, values` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755065-755073](../../../../../../../reference/runtime/host-main.cjs#L755065-L755073) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539690-539698](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539690-L539698) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:755065

Chamadas escritas diretamente neste corpo: `ctx.addIssue`, `invalid2.join`, `values.filter`.

SHA-256 do trecho: `047f48f02eae31079e9291fbe7fedb5e4ac33f4715f2595f84e73e28d125d2a4`.

### evaluation:539690

Chamadas escritas diretamente neste corpo: `ctx.addIssue`, `invalid2.join`, `values.filter`.

SHA-256 do trecho: `2f8cf4e6cebb89a5203d5bf9a8c069de4e47de3d37062988d1ca714f20643b9f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
