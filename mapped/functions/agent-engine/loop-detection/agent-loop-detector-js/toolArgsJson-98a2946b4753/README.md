# `toolArgsJson`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/agent-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:310875-310883](../../../../../../reference/runtime/sand-eval-runner.cjs#L310875-L310883) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:310875-310883](../../../../../../reference/runtime/sand-eval-runner.cjs#L310875-L310883) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:310875

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `toolArgsJsonCache.get`, `toolArgsJsonCache.set`.

SHA-256 do trecho: `f54407a77da85ec2e5c6fa869cd0b4e7629631cb8f664a2cbe62bc08f72a6bc1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
