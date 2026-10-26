# `presenceOnlyHost`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/presence-only-host.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/presence-only-host-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:568969-569014](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L568969-L569014) | `FunctionDeclaration` | não | `host` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:568969-569014](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L568969-L569014) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:568969

Chamadas escritas diretamente neste corpo: `.map`, `Object.create`, `Object.entries`, `Object.fromEntries`, `new RegistryResourceAccessor`, `presenceOnlyPort`, `unwired`.

SHA-256 do trecho: `a4308ee6d726d8e40b92f2a2e8d23ad2b103e02953e4c4059dc03909d44ebfb5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
