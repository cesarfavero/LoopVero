# `toBase642`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-engine/summarization-pending-store.js` · [README do módulo](../../../../modules/agent-engine/summarization-pending-store-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:647790-647792](../../../../../reference/runtime/host-main.cjs#L647790-L647792) | `FunctionDeclaration` | não | `bytes` |
| [evaluation:439447-439449](../../../../../reference/runtime/sand-eval-runner.cjs#L439447-L439449) | `FunctionDeclaration` | não | `bytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647790-647792](../../../../../reference/runtime/host-main.cjs#L647790-L647792) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:439447-439449](../../../../../reference/runtime/sand-eval-runner.cjs#L439447-L439449) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:647790

Chamadas escritas diretamente neste corpo: `.toString`, `Buffer.from`.

SHA-256 do trecho: `60fed149a4c7a5c1f02fdaf4579aa9c769399ea94026824e44e5bb605c227472`.

### evaluation:439447

Chamadas escritas diretamente neste corpo: `.toString`, `Buffer.from`.

SHA-256 do trecho: `60fed149a4c7a5c1f02fdaf4579aa9c769399ea94026824e44e5bb605c227472`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
