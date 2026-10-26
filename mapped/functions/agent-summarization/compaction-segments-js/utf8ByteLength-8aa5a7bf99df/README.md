# `utf8ByteLength`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/compaction-segments.js` · [README do módulo](../../../../modules/agent-summarization/compaction-segments-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616894-616896](../../../../../reference/runtime/host-main.cjs#L616894-L616896) | `FunctionDeclaration` | não | `text3` |
| [evaluation:285434-285436](../../../../../reference/runtime/sand-eval-runner.cjs#L285434-L285436) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616894-616896](../../../../../reference/runtime/host-main.cjs#L616894-L616896) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:285434-285436](../../../../../reference/runtime/sand-eval-runner.cjs#L285434-L285436) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:616894

Chamadas escritas diretamente neste corpo: `Buffer.byteLength`.

SHA-256 do trecho: `fb9aa59605a57eca273c2a72781a4ac20c5db3512e829a1b583c54ea0e771b01`.

### evaluation:285434

Chamadas escritas diretamente neste corpo: `Buffer.byteLength`.

SHA-256 do trecho: `fb9aa59605a57eca273c2a72781a4ac20c5db3512e829a1b583c54ea0e771b01`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
