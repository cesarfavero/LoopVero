# `isPlainEmailAddress`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-external-message-schema.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-external-message-schema-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755062-755064](../../../../../../../reference/runtime/host-main.cjs#L755062-L755064) | `FunctionDeclaration` | não | `value` |
| [evaluation:539687-539689](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539687-L539689) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755062-755064](../../../../../../../reference/runtime/host-main.cjs#L755062-L755064) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539687-539689](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539687-L539689) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:755062

Chamadas escritas diretamente neste corpo: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test`.

SHA-256 do trecho: `e4767355ef0f297ea82add9b43b799523bd506fc4ca2e48536a104edfc333de1`.

### evaluation:539687

Chamadas escritas diretamente neste corpo: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test`.

SHA-256 do trecho: `e4767355ef0f297ea82add9b43b799523bd506fc4ca2e48536a104edfc333de1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
