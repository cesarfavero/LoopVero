# `reportCoercion`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/arg-coercion/coerce-tool-args.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/arg-coercion/coerce-tool-args-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724947-724949](../../../../../../../../reference/runtime/host-main.cjs#L724947-L724949) | `FunctionDeclaration` | não | `value, coerced` |
| [evaluation:479910-479912](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479910-L479912) | `FunctionDeclaration` | não | `value, coerced` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724947-724949](../../../../../../../../reference/runtime/host-main.cjs#L724947-L724949) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479910-479912](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479910-L479912) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:724947

Chamadas escritas diretamente neste corpo: `reportShim`, `schemaArgCoercion.applied`.

SHA-256 do trecho: `ea115d5718741d40e20349f869d639cd0f119fb92f286bcb7aee2a8ff5cc52fe`.

### evaluation:479910

Chamadas escritas diretamente neste corpo: `reportShim`, `schemaArgCoercion.applied`.

SHA-256 do trecho: `ea115d5718741d40e20349f869d639cd0f119fb92f286bcb7aee2a8ff5cc52fe`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
