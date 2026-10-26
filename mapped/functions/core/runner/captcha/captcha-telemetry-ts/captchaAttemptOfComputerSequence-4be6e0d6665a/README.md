# `captchaAttemptOfComputerSequence`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `core/runner/captcha/captcha-telemetry.ts` · [README do módulo](../../../../../../modules/core/runner/captcha/captcha-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699012-699025](../../../../../../../reference/runtime/host-main.cjs#L699012-L699025) | `FunctionDeclaration` | não | `sequence` |
| [evaluation:489600-489613](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489600-L489613) | `FunctionDeclaration` | não | `sequence` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699012-699025](../../../../../../../reference/runtime/host-main.cjs#L699012-L699025) | 3 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:489600-489613](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489600-L489613) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:699012

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `holdMs`, `holds`, `pointer`.

SHA-256 do trecho: `1b15aca067d3298dfb58dc990bda20cd743c3b2c5351d779df8e257b748c2ed2`.

### evaluation:489600

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `holdMs`, `holds`, `pointer`.

SHA-256 do trecho: `1b15aca067d3298dfb58dc990bda20cd743c3b2c5351d779df8e257b748c2ed2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
