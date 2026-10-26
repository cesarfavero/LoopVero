# `normalizeDesktopDownReason`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/desktop-health-forwarder.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/desktop-health-forwarder-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:731352-731359](../../../../../../../reference/runtime/host-main.cjs#L731352-L731359) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731352-731359](../../../../../../../reference/runtime/host-main.cjs#L731352-L731359) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:731352

Chamadas escritas diretamente neste corpo: `/^exit--?[0-9]+$/.test`, `/^signal-SIG[A-Z0-9]+$/.test`.

SHA-256 do trecho: `b72950d15c8e5d4b91b0b94ac5ecec47c419128a46ea6557b7b770419cedfc7d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
