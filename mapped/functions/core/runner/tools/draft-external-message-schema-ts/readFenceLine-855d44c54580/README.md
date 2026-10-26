# `readFenceLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-external-message-schema.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-external-message-schema-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755138-755147](../../../../../../../reference/runtime/host-main.cjs#L755138-L755147) | `FunctionDeclaration` | não | `trimmed, fence` |
| [evaluation:539763-539772](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539763-L539772) | `FunctionDeclaration` | não | `trimmed, fence` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755138-755147](../../../../../../../reference/runtime/host-main.cjs#L755138-L755147) | 4 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:539763-539772](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539763-L539772) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:755138

Chamadas escritas diretamente neste corpo: `/^('+|~+)$/.exec`, `CLOSE_AFTER_TEXT.exec`, `CLOSE_BEFORE_TEXT.exec`, `run.startsWith`.

SHA-256 do trecho: `08160499ed60f52fbf3c7b81f6fbc2681b0afd8ac418c282ea6e042821f8512f`.

### evaluation:539763

Chamadas escritas diretamente neste corpo: `/^('+|~+)$/.exec`, `CLOSE_AFTER_TEXT.exec`, `CLOSE_BEFORE_TEXT.exec`, `run.startsWith`.

SHA-256 do trecho: `08160499ed60f52fbf3c7b81f6fbc2681b0afd8ac418c282ea6e042821f8512f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
