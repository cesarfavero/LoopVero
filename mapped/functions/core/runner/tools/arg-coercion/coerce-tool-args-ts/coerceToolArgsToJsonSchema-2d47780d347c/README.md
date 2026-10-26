# `coerceToolArgsToJsonSchema`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/arg-coercion/coerce-tool-args.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/arg-coercion/coerce-tool-args-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724953-724955](../../../../../../../../reference/runtime/host-main.cjs#L724953-L724955) | `FunctionDeclaration` | não | `jsonSchema3, value` |
| [evaluation:479916-479918](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479916-L479918) | `FunctionDeclaration` | não | `jsonSchema3, value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724953-724955](../../../../../../../../reference/runtime/host-main.cjs#L724953-L724955) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479916-479918](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479916-L479918) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:724953

Chamadas escritas diretamente neste corpo: `coerceArgsToJsonSchema`, `isUnknownRecord2`, `reportCoercion`.

SHA-256 do trecho: `89cb2723fb0a1bab889ec132d39d74fa44860e810c25d66eb4a2bd4ced63c8e9`.

### evaluation:479916

Chamadas escritas diretamente neste corpo: `coerceArgsToJsonSchema`, `isUnknownRecord2`, `reportCoercion`.

SHA-256 do trecho: `89cb2723fb0a1bab889ec132d39d74fa44860e810c25d66eb4a2bd4ced63c8e9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
